"use client";
import useAxios from "@/hooks/axios/useAxios";
import NoDataFound from "../../global/NoDataFound";
import CardSkeleton from "../../global/CardSkeleton";
import { Badge, Button, Card, Group, Text, Tooltip } from "@mantine/core";
import { imageUrl } from "@/staticData/image";
import { calculateAge } from "@/utils/calculateAge";
import { heightCalculator } from "@/utils/heightCalculator";
import Link from "next/link";
import { notifyError, notifySuccess } from "@/utils/showNotification";
import axios from "axios";

const AcceptedList = () => {
  const { data, error, loading, refetch } = useAxios(
    "user/friendship/accepted"
  );

  const skeletons = new Array(5).fill();

  const handleDeclineAccept = (requisterId, status) => {
    let statusGlobal = "";

    if (status == "unfriend") {
      statusGlobal = "unfriend";
    }
    if (status == "declined") {
      statusGlobal = "declined";
    }

    const payload = {
      status: statusGlobal,
      friendshipId: requisterId,
    };

    // console.log('payload', payload);
    axios
      .patch(`user/updatefriends`, payload)
      .then((res) => {
        if (statusGlobal === "unfriend") {
          notifySuccess("Unfriend successfully!");
          refetch();
        }

        if (statusGlobal === "declined") {
          notifySuccess("Request declined successfully!");
          refetch();
        }
      })
      .catch((err) => {
        notifyError(err.response.data.message);
      });
  };

  return (
    <>
      <div className="container recentlyViewed">
        {!loading ? (
          <>
            {data?.data?.map((item, i) => (
              <div key={i} className="recentlyViewed__singleContainer">
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                  <Card.Section className="pointer">
                    <Link href={`/view-profile/${item?.requester?._id}`}>
                      <img
                        src={
                          item?.requester?.profilePicture?.url?.large ||
                          imageUrl
                        }
                        height={250}
                        alt="Profile"
                        fit="contain"
                        className="recently_img"
                      />
                    </Link>
                  </Card.Section>

                  <Group position="apart" mt="md" mb="xs">
                    <Text weight={500}>
                      {item?.requester?.firstName +
                        " " +
                        item?.requester?.lastName}
                    </Text>
                    {/* <Badge color="pink" variant="light" size="md">
                      Online 2h ago 
                    </Badge> */}
                  </Group>

                  <Text size="sm" className="flex flex-column">
                    <div>
                      <b> Age </b> :{" "}
                      {calculateAge(item?.requester?.dateOfBirth)} yrs
                    </div>
                    <div>
                      <b>Height</b> :{" "}
                      {heightCalculator(item?.requester?.appearance?.height)}
                    </div>
                    <div>
                      <b>Religion</b>: {item?.requester?.religion}
                    </div>
                    {item?.requester?.doctrine?.motherTongue && (
                      <div>
                        <b>Native Language</b>:{" "}
                        {item?.requester?.doctrine?.motherTongue}
                      </div>
                    )}

                    {/* <div>{item?.requester?.doctrine?.caste} </div> */}
                    <div>
                      <b>Country</b>: {item?.requester?.country}
                    </div>
                    <br />
                  </Text>

                  {/* <h3 className="text-center pt-15">
                    Connect with{" "}
                    {item?.requester?.gender === "Male" ? "him" : "her"}?
                  </h3> */}

                  <div className="flex justify-between flex-gap-5">
                    <Button
                      variant="filled"
                      color="pink"
                      fullWidth
                      mt="md"
                      radius="md"
                      onClick={() => handleDeclineAccept(item?._id, "unfriend")}
                    >
                      Unfriend
                    </Button>
                    <Tooltip label="Coming Soon..." color="pink">
                      <Button
                        variant="filled"
                        color="gray"
                        fullWidth
                        mt="md"
                        radius="md"
                        onClick={() => handleDeclineAccept(item?._id, "")}
                      >
                        Message
                      </Button>
                    </Tooltip>
                  </div>
                </Card>
              </div>
            ))}
          </>
        ) : (
          <>
            {skeletons?.map((item, i) => (
              <div className="mt-15" key={i}>
                <CardSkeleton></CardSkeleton>
              </div>
            ))}
          </>
        )}
      </div>
      {data?.data?.length === 0 && (
        <div className="text-center">
          <h2 className="text-center">There is no accepted request!</h2>
        </div>
      )}

      {data?.data?.length === 0 && <NoDataFound></NoDataFound>}
    </>
  );
};

export default AcceptedList;
