import React, { useEffect, useState } from "react";
import Banner from "../component/Banner";
import Card from "../component/Card";
import Jobs from "./Jobs";
import Sidebar from "../component/Sidebar";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [jobs, setJobs] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    setIsLoading(true);
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setIsLoading(false);
      })
      .catch((error) => console.error("Error fetching jobs:", error));
  }, []);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filterItems = jobs.filter((job) =>
    job.jobTitle.toLowerCase().includes(query.toLowerCase())
  );

  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return { startIndex, endIndex };
  };

  const nextPage = () => {
    if (currentPage < Math.ceil(filterItems.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prePage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const filterData = (jobs, selected, query) => {
    let filteredJobs = jobs;

    if (query) {
      filteredJobs = filteredJobs.filter((job) =>
        job.jobTitle.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (selected) {
      filteredJobs = filteredJobs.filter((job) => {
        const lowerSelected = selected.toLowerCase();
        return (
          job.JobLocation?.toLowerCase() === lowerSelected ||
          parseInt(job.maxPrice) === parseInt(selected) ||
          job.salaryType?.toLowerCase() === lowerSelected ||
          job.employmentType?.toLowerCase() === lowerSelected
        );
      });
      
    }
   
    const { startIndex, endIndex } = calculatePageRange();
    filteredJobs = filteredJobs.slice(startIndex, endIndex);

    return filteredJobs.map((data, i) => <Card key={i} data={data} />);
  };

  const result = filterData(jobs, selectedCategory, query);

  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />
      <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
        <div className="bg-white p-4 rounded">
          <Sidebar handleChange={handleChange} />
        </div>

        <div className="col-span-2 bg-white p-4 rounded-sm">
          {isLoading ? (
            <p className="font-medium">Loading......</p>
          ) : result.length > 0 ? (
            <Jobs result={result} />
          ) : (
            <>
              <h3 className="text-lg font-bold md:2">{result.length} Jobs</h3>
              <p>No data found</p>
            </>
          )}

          {result.length > 0 && (
            <div className="flex justify-center mt-4 space-x-8">
              <button onClick={prePage} disabled={currentPage === 1}>
                Previous
              </button>
              <span>
                Page {currentPage} of{" "}
                {Math.ceil(filterItems.length / itemsPerPage)}
              </span>
              <button
                onClick={nextPage}
                disabled={
                  currentPage >= Math.ceil(filterItems.length / itemsPerPage)
                }
              >
                Next
              </button>
            </div>
          )}
        </div>

        <div className="bg-white p-4 rounded">right</div>
      </div>
    </div>
  );
};

export default Home;
