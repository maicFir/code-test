/*
 * @LineStart: -------------------------------------------
 * @Copyright: © 2022, Web技术学苑. All rights reserved
 * @LineEnd: -------------------------------------------
 * @Author: maicFir
 * @Date: 2023-02-17 11:20:17
 * @LastEditors: maicFir
 * @LastEditTime: 2023-02-17 20:08:51
 * @Description:
 */
import React from "react";
import Editor from "@monaco-editor/react";

function BaseEditor(props) {
  const { value: curentValue, onChange, ...rest } = props;
  const handleChangeValue = (e) => {
    onChange(e);
  };
  return (
    <Editor
      {...rest}
      height="20vh"
      defaultLanguage="javascript"
      defaultValue={curentValue}
      value={curentValue}
      onChange={handleChangeValue}
    />
  );
}

export default BaseEditor;
