import { Autocomplete, Input, Select, Textarea } from "@mantine/core";
import { DatePickerInput, TimeInput } from "@mantine/dates";
import { PhoneInput } from "react-international-phone";
import axios from "axios";
import parsePhoneNumber, {
  AsYouType,
  isValidPhoneNumber,
} from "libphonenumber-js";

import {
  IconArrowDown,
  IconCalendarStats,
  IconChevronDown,
} from "@tabler/icons-react";
import React, { useState } from "react";
import { useRef } from "react";
import { ActionIcon, rem } from "@mantine/core";
import { IconClock } from "@tabler/icons-react";
import { notifyError, notifySuccess } from "@/utils/showNotification";
import ErrorMessages from "@/components/global/ErrorMessages";

const EventsInquiry = () => {
  const ref = useRef(null);
  const [phone, setPhone] = useState("");
  const [eventDate, setEventDate] = useState(null);
  const [errors, setErrors] = useState({});
  const handleFormChange = (name, value) => {
    setPhone(value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const phoneInfo = parsePhoneNumber(phone);
    // console.log("phoneInfo", phoneInfo);

    const payloadData = {
      fullName: event.target.fullName?.value,
      email: event.target.email?.value,
      phone: {
        number: phoneInfo?.nationalNumber,
        countryCode: phoneInfo?.countryCallingCode,
      },
      eventDate: eventDate,
      description: event.target.description?.value,
    };

    try {
      const response = await axios.post("/user/events-inquiry", payloadData);

      // Handle the server response if needed
      console.log(response.data);

      setEventDate(null);
      setPhone("");
      event.target.reset();
      notifySuccess("Events Inquiry successfully saved");
    } catch (error) {
      // Handle errors
      if (error.response.data.errors && !error.response.data.errors.message) {
        const fieldErrors = error.response.data.errors;
        notifyError("Please provide all information");
      } else {
        notifyError("Error occurred");
      }

      console.error("Error:", error);
    }
  };

  console.log("errors saved", errors);

  const pickerControl = (
    <ActionIcon
      variant="subtle"
      color="white"
      onClick={() => ref.current?.showPicker()}
    >
      <IconClock
        style={{ width: rem(26), height: rem(26), color: "white" }}
        stroke={1.8}
      />
    </ActionIcon>
  );

  return (
    <div className="eventsInquiry">
      {/* <ErrorMessages errors={errors} /> */}
      <div className="eventsInquiry__wrapper container">
        <div className="eventsInquiry__wrapper--left">
          <img src="/landing/Footer.jpg" alt="bride-groom" loading="lazy" />
        </div>

        <div className="eventsInquiry__wrapper--right home_event_inquiry">
          <h2>Events Inquiry</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <Input
                width="100%"
                variant="filled"
                radius="md"
                size="xl"
                placeholder="Your Name..."
                name="fullName"
                withAsterisk
              />
              <br />
              {/* <Input width="100%" variant="filled" radius="md" size="xl" placeholder="Your Partner Name *" />
                        <br /> */}
              <Input
                width="100%"
                variant="filled"
                radius="md"
                size="xl"
                placeholder="Email *"
                name="email"
                withAsterisk
              />

              <br />
              <PhoneInput
                defaultCountry="bd"
                name="phone"
                // value={phone}
                onChange={(phone) => handleFormChange("phone", phone)}
              />
              <br />
              <DatePickerInput
                clearable
                // defaultValue={today}
                // description="Years must be at least 18"
                placeholder="Preferred Event Date *"
                mx="auto"
                size="xl"
                radius="md"
                name="eventDate"
                rightSection={<IconCalendarStats color="white" />}
                withAsterisk
                value={eventDate}
                // maw={400}
                // withAsterisk
                // value={data.basic2dob}
                onChange={(value) => setEventDate(value)}
                // error={fieldErrors.basic2dob}
                //disableBeforeDate={minDate} // Use the disableDate function
                // maxDate={generate18YearBefore()}
              />
              <br />
              {/* <Select
              placeholder="Select Event *"
           
              data={["Event 1", "Event 2", "Event 3"]}
              size="xl"
              radius="md"
              rightSection={<IconChevronDown color="white" />}
              // value={["Event 1", "Event 2", "Event 3"]}
              // name="basic2country"
              // onChange={(event) => handleChange("basic2country", event)}
              // error={fieldErrors.basic2country}
              searchable
            /> */}

              {/* <Autocomplete
              searchable
              placeholder="Select How Many People?"
              // styles={{ label: labelStyles }}
              // data={countries}
              // data={countryList}
              data={["1", "2", "3", "4", "5", "6"]}
              size="xl"
              radius="md"
              rightSection={<IconChevronDown color="white" />}
              // value={["Event 1", "Event 2", "Event 3"]}
              // name="basic2country"
              // onChange={(event) => handleChange("basic2country", event)}
              // error={fieldErrors.basic2country}
            />
            <br /> */}
              {/* <TimeInput
              size="xl"
              radius="md"
              // label="Click icon to show browser picker"
              placeholder="Set The Timer"
              ref={ref}
              rightSection={pickerControl}
            />
            <br /> */}
              <Textarea
                size="xl"
                radius="md"
                minRows={3}
                placeholder="Event Description *"
                name="description"
                withAsterisk
              />
              <br />
              <br />
              <button className="btn">Submit Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EventsInquiry;
