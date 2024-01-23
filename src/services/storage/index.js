const createStorage = (LOCAL_STORAGE_KEY) => {
  const storage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? {};

  return {
    get(key) {
      return storage[key];
    },
    set(key, value) {
      storage[key] = value;
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(storage));
    },
    remove(key) {
      delete storage[key];
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(storage));
    },
  };
};

const storage = createStorage("Reading Time");
const CHARACTER = "character";
const LESSON = "lesson";
const STUDENTREVIEW = "student_review";
const COMMENT = "comment";

const DATADETAIL = "datadetail";
const STATUSLOGIN = "statuslogin";

const Storage = {
  setCHARACTER: (data) => storage.set(CHARACTER, data),
  getCHARACTER: () => storage.get(CHARACTER),
  removeCHARACTER: () => storage.remove(CHARACTER),

  setLESSON: (data) => storage.set(LESSON, data),
  getLESSON: () => storage.get(LESSON),
  removeLESSON: () => storage.remove(LESSON),

  setSTUDENTREVIEW: (data) => storage.set(STUDENTREVIEW, data),
  getSTUDENTREVIEW: () => storage.get(STUDENTREVIEW),
  removeSTUDENTREVIEW: () => storage.remove(STUDENTREVIEW),

  setCOMMENT: (data) => storage.set(COMMENT, data),
  getCOMMENT: () => storage.get(COMMENT),
  removeCOMMENT: () => storage.remove(COMMENT),

  setDATADETAIL: (data) => storage.set(DATADETAIL, data),
  getDATADETAIL: () => storage.get(DATADETAIL),
  removeDATADETAIL: () => storage.remove(DATADETAIL),

  setSTATUSLOGIN: (data) => storage.set(STATUSLOGIN, data),
  getSTATUSLOGIN: () => storage.get(STATUSLOGIN),
  removeSTATUSLOGIN: () => storage.remove(STATUSLOGIN),
};

export default Storage;
