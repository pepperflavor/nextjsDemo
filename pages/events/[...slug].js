import EventList from "@/components/events/event-list";
import ResultsTitle from "@/components/results-title/results-title";
import Button from "@/components/ui/button";
import ErrorAlert from "@/components/ui/error-alert";
import { getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router";
import { Fragment } from "react";

// 두번 랜더링 되는데 왜?>
function FilterEventsPage() {
  const router = useRouter();

  // url에 있는 내용을 긁어와서 필터링할 조건으로 사용함
  // url에 접근하는 이 훅은 컴포넌트가 첫번째 랜더링을 마친 후에 실행된다.
  const filterData = router.query.slug;
  console.log(filterData);

  //url에 검색 지정어 이외에 데이터가 들어가면 안되도록 조건걸기
  // 첫번째 랜더링될때엔 url에 접근이 불가능하므로
  if (!filterData) {
    return <p className="center">Loading....</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  console.log("여기보셈");
  console.log(filteredYear);
  console.log(filteredMonth);

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  // 설정한 범위 이상의 조건으로 검색했을 때 출력
  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p> 검색 조건이 범위를 초과했습니다 다시 입력하세요이</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>선택한 조건에 맞는 데이터가 없습니다!!!</p>
        </ErrorAlert>
        <div className={center}>
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}

export default FilterEventsPage;
