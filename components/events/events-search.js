import { useRef } from "react";
import Button from "../ui/button";

import classes from "./events-search.module.css";

function EventsSearch(props) {
  // 전송하기 전에 한번만 값을 읽어 들이면 되기 때문에 ref 사용
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  // react 에서는 기본 Dom event를 수싢 ㅐㅆ기 때문에 자동적으로 event 객체를 가져오도록 햇었음
  // 여기서는 event.preventDefault();를 호출해서 브라우저가 기본값으로 http요청을 전송하지 않도록 해야한다.
  function submitHandler(event) {
    event.preventDefault();

    const selectedYear = yearInputRef.current;
    const selectedMonth = monthInputRef.current;

    // 양식 제출 후 네비게이션으로 이동하도록 하기 위해서 함수 받아옴
    props.onSearch(selectedYear, selectedMonth);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearInputRef}>
            <option value={"2021"}>2021</option>
            <option value={"2022"}>2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthInputRef}>
            <option value={"1"}>January</option>
            <option value={"2"}>Februry</option>
            <option value={"3"}>March</option>
            <option value={"4"}>April</option>
            <option value={"5"}>May</option>
            <option value={"6"}>June</option>
            <option value={"7"}>July</option>
            <option value={"8"}>August</option>
            <option value={"9"}>September</option>
            <option value={"10"}>October</option>
            <option value={"11"}>November</option>
            <option value={"12"}>December</option>
          </select>
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  );
}

export default EventsSearch;
