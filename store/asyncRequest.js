export const asyncRequest = ({ dispatch, getState }) => (next) => (action) => {
  if (typeof acion === 'function') {
    action = action(dispatch, getState);
  }
  const { params, promise, types, ...rest } = action;
  if (!promise) {
    return next(action);
  }
  const [REQUEST, SUCCESS, FAILURE] = types;
  next({ ...rest, params: params || null, type: REQUEST });
  return promise()
    .then(
      (result) => next({ ...rest, result, type: SUCCESS }),
      (error) => next({ ...rest, error, type: FAILURE })
    )
    .catch((error) =>
      next({ ...rest, error, params: params || null, type: FAILURE })
    );
};
