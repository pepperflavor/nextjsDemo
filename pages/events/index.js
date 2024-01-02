import EventList from "@/components/events/event-list";
import EventsSearch from "@/components/events/events-search";
import { getAllEvents } from "@/dummy-data";
import { Fragment } from "react";
import { useRouter } from "next/router";

function AllEventsPage() {
  const events = getAllEvents();
  const router = useRouter();

  function findEventsHadler(year, month) {
    // 두개 이상의 파라미터면 slug 페이지 실행시켜줌
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHadler} />
      <EventList items={events} />
    </Fragment>
  );
}

export default AllEventsPage;
