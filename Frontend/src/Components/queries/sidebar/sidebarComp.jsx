import React from "react";
import { Stack } from "@mui/material";
import UserCardComp from "../userCard/userCard";
import "./sidebarComp.css";

function SidebarComp({
  handleUserClick,
  selectedUserId,
  displayOption,
  Queries,
}) {
  return (
    <div>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}
      >
        {Object.keys(Queries).map((uId) => {
          return displayOption === "Pending" ? (
            Queries[uId].isResponded === false ? (
              <UserCardComp
                userId={uId}
                selectedUserId={selectedUserId}
                handleUserClick={handleUserClick}
                inBody={false}
              />
            ) : (
              <></>
            )
          ) : displayOption === "Answered" ? (
            Queries[uId].isResponded === true ? (
              <UserCardComp
                userId={uId}
                selectedUserId={selectedUserId}
                handleUserClick={handleUserClick}
                inBody={false}
              />
            ) : (
              <></>
            )
          ) : (
            <></>
          );
        })}
      </Stack>
    </div>
  );
}

export default SidebarComp;
