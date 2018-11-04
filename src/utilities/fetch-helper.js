class FetchHelper {
  static serializeParams(params) {
    let map = new Map(Object.entries(params));
    let arr = [];
    map.forEach((value, key) => {
      arr.push(`&${key}=${value}`);
    });
    return arr.join('');
  }
}

export default FetchHelper;