// Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com)
// https://github.com/lukeed/regexparam

export default function(str: string, loose?: boolean): { keys: string[]; pattern: RegExp } {
  let c;
  let o;
  let tmp;
  let ext;
  let pattern = "";

  const keys: string[] = [];
  const arr = str.split("/");
  if (!arr[0]) {
    arr.shift();
  }

  while ((tmp = arr.shift())) {
    c = tmp[0];
    if (c === "*") {
      keys.push("wild");
      pattern += "/(.*)";
    } else if (c === ":") {
      o = tmp.indexOf("?", 1);
      ext = tmp.indexOf(".", 1);
      keys.push(tmp.substring(1, !!~o ? o : !!~ext ? ext : tmp.length));
      pattern += !!~o && !~ext ? "(?:/([^/]+?))?" : "/([^/]+?)";
      if (!!~ext) {
        pattern += (!!~o ? "?" : "") + "\\" + tmp.substring(ext);
      }
    } else {
      pattern += "/" + tmp;
    }
  }

  return {
    keys,
    pattern: new RegExp("^" + pattern + (loose ? "(?=$|/)" : "/?$"), "i")
  };
}
