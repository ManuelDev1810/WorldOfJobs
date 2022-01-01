import JobItem from "./JobItem/JobItem";

const DUMMY_JOBS = [
  {
    id: "job1",
    title: "React JS Developer",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.",
    company: "Dacetim",
    vacancies: 7,
    remote: true,
    date: '01-01-2022',
  },
  {
    id: "job2",
    title: "Angular Developer",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.",
    company: "Facebook",
    vacancies: 2,
    remote: true,
    date: '01-01-2022',
  },
  {
    id: "job3",
    title: ".NET Core Developer",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.",
    company: "Micwoew",
    vacancies: 3,
    remote: false,
    date: '01-01-2022',
  },
  {
    id: "job4",
    title: ".React Native Developer",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.",
    company: "Instagram",
    vacancies: 15,
    remote: true,
    date: '01-01-2022',
  },
];

const Jobs = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="list-group w-50">
        {DUMMY_JOBS.map((job) => {
          return <JobItem key={job.id} job={job} />;
        })}
      </div>
    </div>
  );
};

export default Jobs;
