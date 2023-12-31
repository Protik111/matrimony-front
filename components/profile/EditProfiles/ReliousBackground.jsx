import { communities, motherTongues2, religions, subCommunities } from '@/staticData/InputFields/inputFields'
import { Select } from '@mantine/core'
import React from 'react'

const ReliousBackground = ({ profileDatas, setProfileDatas }) => {
    const handleFormChange = (name, value) => {
        setProfileDatas((prevValues) => ({
            ...prevValues,
            [name]: value
        }))
    }

    return (
        <div className='px-15'>
            <Select
                className='w-50 w-md-100-responsive'
                size="md"
                placeholder="Select Religion"
                label="Religion"
                data={religions}
                value={profileDatas.religion}
                name="religion"
                onChange={(event) => handleFormChange('religion', event)}
            // dropdownPosition="bottom"
            />

            <br />


            <Select
                className='w-50 w-md-100-responsive'
                size="md"
                placeholder="Select Community"
                label="Community"
                data={communities}
                value={profileDatas.community}
                name="community"
                onChange={(event) => handleFormChange('community', event)}
            />

            <br />

            <Select
                className='w-50 w-md-100-responsive'
                size="md"
                placeholder="Select Community"
                label="Sub-Community"
                data={subCommunities}
                value={profileDatas.caste}
                name="caste"
                onChange={(event) => handleFormChange('caste', event)}
            />

            <br />

            <Select
                className='w-50 w-md-100-responsive'
                size="md"
                placeholder="Select Mother Tongue"
                label="Mother Tongue"
                data={motherTongues2}
                value={profileDatas.motherTongue}
                name="motherTongue"
                onChange={(event) => handleFormChange('motherTongue', event)}
            />

            <br />

        </div>
    )
}

export default ReliousBackground