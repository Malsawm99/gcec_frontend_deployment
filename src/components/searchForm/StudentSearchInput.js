import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import { useSearch } from "../hooks/searchContext";

const StudentSearchInput = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `https://gcecbackend-rk4j.onrender.com/api/v1/student/search/${values.keyword}`
      );
      setValues({ ...values, results: data });
      navigate("/stud-search-dash");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form
        className="mainSearchStudentInputForm"
        role="search"
        onSubmit={handleSubmit}
      >
        <TextField
          variant="outlined"
          fullWidth
          placeholder="Search"
          aria-label="Search"
          value={values.keyword}
          onChange={(e) => setValues({ ...values, keyword: e.target.value })}
        />
        <Button variant="outlined" color="success" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
};

export default StudentSearchInput;
