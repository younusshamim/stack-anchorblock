import React, { useState } from "react";
import UsersHeading from "./UsersHeading";
import UsersList from "./UsersList";
import { useGetUsersQuery } from "../../utils/api";
import Loader from "../../components/Loader";
import Error from "../../components/Error";

const Users: React.FC = () => {
  const [currPage, setCurrPage] = useState(1)
  const { data, error, isLoading } = useGetUsersQuery(currPage)
  const { data: userData, page, per_page, total, total_pages } = data || {};

  return (
    <>
      <UsersHeading />

      {isLoading ? (
        <Loader />
      ) : userData ? (
        <UsersList
          data={userData}
          page={page}
          total_pages={total_pages}
          setCurrPage={setCurrPage}
        />
      ) : error ? (
        <Error message="Oh no, there was an error" />
      ) : null}
    </>
  )
};

export default Users;


