import Link from "next/link";

import classes from "./button.module.css";

// Link 태그 안에 a 태그를 사용해서 스타일을 추가할 수 있다.
// Link 태그가 내부 a 태그를 인식해 스타일을 인식하고 적용함, a 태그에 href는 없다
function Button(props) {
  if (props.link) {
    return (
      <Link href={props.link} className={classes.btn}>
        {props.children}
      </Link>
    );
  }

  return (
    <button className={classes.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
