import useFormContext from "@/hooks/common/useFormContext"
import { communities, profileFor, religions } from "@/staticData/InputFields/inputFields"
import { btnBackground } from "@/styles/library/mantine"
import { Button, Group, Input, Radio, Select, TextInput } from "@mantine/core"

const Basic1 = () => {

    const { data, handleChange, fieldErrors } = useFormContext()

    const content = (
        <div className="mutlistep__registration px-15">
            <Select
                size="md"
                placeholder="Select"
                label="Profile for"
                // styles={{ label: labelStyles }}
                data={profileFor}
                value={data.basic1postedBy}
                withAsterisk
                name="basic1postedBy"
                onChange={(event) => handleChange('basic1postedBy', event)}
                error={fieldErrors.basic1postedBy}
            />

            <br />

            <div className="flex flex-gap-10">
                <TextInput
                    label="Your First Name"
                    placeholder="First name"
                    size="md"
                    withAsterisk
                    name="basic1firstName"
                    value={data.basic1firstName}
                    onChange={(event) => handleChange('basic1firstName', event.target.value)}
                    error={fieldErrors.basic1firstName}

                />

                <TextInput
                    // style={{ display: 'flex', alignSelf: 'flex-end' }}
                    label="Your Last Name"
                    placeholder="Last name"
                    size="md"
                    withAsterisk
                    name="basic1lastName"
                    value={data.basic1lastName}
                    onChange={(event) => handleChange('basic1lastName', event.target.value)}
                    error={fieldErrors.basic1lastName}

                />
            </div>

            <br />

            <Radio.Group
                label="Gender"
                withAsterisk
                name="basic1gender"
                onChange={(event) => handleChange('basic1gender', event)}
                value={data.basic1gender}
                error={fieldErrors.basic1gender}
            >
                <Group mt="xs">
                    <Radio checked={data.gender === 'male'} color="pink" value="male" label="Male" />
                    <Radio checked={data.gender === 'female'} color="pink" value="Female" label="Female" />
                </Group>
            </Radio.Group>

            <br />

            <Select
                size="md"
                placeholder="Select Religion"
                label="Religion"
                data={religions}
                value={data.basic1religion}
                withAsterisk
                name="basic1religion"
                onChange={(event) => handleChange('basic1religion', event)}
                error={fieldErrors.basic1religion}
            // dropdownPosition="bottom"
            />

            <br />


            <Select
                size="md"
                placeholder="Select Community"
                label="Community"
                data={communities}
                value={data.basic1community}
                withAsterisk
                name="basic1community"
                onChange={(event) => handleChange('basic1community', event)}
                error={fieldErrors.basic1community}
            />

            <br />


            {/* <Button size="md" fullWidth style={btnBackground} onClick={handleFormSubmit}>
                Next
            </Button> */}

            <br />

        </div>
    )

    return content
}
export default Basic1