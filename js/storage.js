const DB = {
  prefix: 'op_',

  get(key, fallback = null) {
    const raw = localStorage.getItem(this.prefix + key);
    if (raw === null) return fallback;
    try { return JSON.parse(raw); }
    catch { localStorage.removeItem(this.prefix + key); return fallback; }
  },

  set(key, value) {
    localStorage.setItem(this.prefix + key, JSON.stringify(value));
  },

  push(key, value) {
    const list = this.get(key, []);
    list.unshift(value);
    this.set(key, list);
    return value;
  },

  removeFromArray(key, id) {
    this.set(key, this.get(key, []).filter(item => item.id !== id));
  },

  exportAll() {
    const out = {};
    Object.keys(localStorage)
      .filter(k => k.startsWith(this.prefix))
      .forEach(k => { out[k.replace(this.prefix, '')] = JSON.parse(localStorage.getItem(k)); });
    return out;
  },

  importAll(payload) {
    Object.entries(payload).forEach(([k, v]) => this.set(k, v));
  },

  clearAll() {
    Object.keys(localStorage)
      .filter(k => k.startsWith(this.prefix))
      .forEach(k => localStorage.removeItem(k));
  }
};
