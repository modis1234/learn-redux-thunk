// type = 'GET_POSTS' / 'GET_POST'
// promiseCreator = postsAPI.getPosts() / postsAPI.getPostById(id) 
export const createPromiseThunk = (type, promiseCreator)=> {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

    // thunk 생성함수를 만들어서 반환해주는 작업
    return param => async (dispatch) => {
        // 요청 시작
        dispatch({ type });
        try {
            // API 호출
            const payload = await promiseCreator(param);
            // 성공했을 때
            dispatch({
                type: SUCCESS,
                payload
            });
        } catch (e) {
            // 실패했을 때
            dispatch({
                type: ERROR,
                payload: e,
                error: true //FSA(Flux Standard Action) 규칙
            });
        }
    }
}


// 리듀서 리팩토링
export const handleAsyncActions = (type, key) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
    const reducer = (state, action) => {
        switch(action.type) {
            case type:
                return {
                    ...state,
                    [key]: reducerUtils.loading(),
                }
            case SUCCESS:
                return {
                    ...state,
                    [key]: reducerUtils.success(action.payload)
                }
            case ERROR:
                return {
                    ...state,
                    [key]: reducerUtils.error(action.payload)
                }
            default:
                return state;
        }
    }

    return reducer;
}

export const reducerUtils = {
  initial: (initialData = null) => ({
    loading: false,
    data: initialData,
    error: null,
  }),
  loading: (prevState = null) => ({
    data: prevState,
    loading: true,
    error: null,
  }),
  success: (data) => ({
    data,
    loading: false,
    error: null,
  }),
  error: (error) => ({
    data: null,
    loading: false,
    error,
  }),
};
