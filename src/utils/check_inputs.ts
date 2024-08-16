// imports

import checkType from "./checkType/checkType";
import isEmpty from "./isEmpty/isEmpty";

// interfaces

import { Checkers, FormI } from "@/interfaces/interfaces";
import { Dispatch, SetStateAction } from "react";

export default function checkInputs(
  checkers: Checkers[],
  form: FormI,
  setForm: Dispatch<SetStateAction<FormI>>
): boolean {
  let hasErr = false;

  // أنشئ كائن جديد لتحديث الأخطاء
  const updatedForm = { ...form };

  for (const checker of checkers) {
    const { feild, type, feildName } = checker;

    // تحقق مما إذا كان الحقل فارغًا
    if (isEmpty(feild)) {
      updatedForm[feildName as keyof FormI].err = `${feildName} can't be empty`;
      hasErr = true;
    } else if (!checkType(feild, type)) {
      updatedForm[feildName as keyof FormI].err = `${feildName} must be ${type}`;
      hasErr = true;
    } else {
      // إذا لم يكن هناك خطأ، تأكد من مسح رسالة الخطأ
      updatedForm[feildName as keyof FormI].err = "";
    }
  }

  // قم بتحديث النموذج بعد التحقق من جميع الحقول
  setForm(updatedForm);

  return hasErr;
}
