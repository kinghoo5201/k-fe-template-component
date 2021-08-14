// _IRIM_PROJECT_NAME_
// @author _IRIM_AUTHOR_ <_IRIM_EMAIL_>
// @create _IRIM_GMT_CREATE_

import React from "react";
import classNames from "classnames";
import "./styles/index.scss";

export interface DemoInputProps extends Record<string, any> {
  value?: string;
}

export default function DemoInput(props: DemoInputProps): JSX.Element {
  const clazz = classNames("_IRIM_PROJECT_NAME_-container", props.className);

  return (
    <div className={clazz}>
      <span>Hello, {props.value || "--"}</span>
    </div>
  );
}
