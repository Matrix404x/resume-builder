import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { Button, Divider, Stack, Typography } from '@mui/material';
import { FaFileDownload } from 'react-icons/fa';
import Edit from '../Components/Edit.jsx';
import { FaHistory } from 'react-icons/fa';



function Preview({ userInput, finish }) {
  console.log(userInput);
  return (
    <>
      <div>

        <div style={{ marginTop: '100px' }}>
          {userInput.personalDetails.name != "" &&
            <div className="flex-column">
              { finish && <div className="d-flex justify-content-end align-items-center">
                {/* download */}
                <button className='btn fs-3 text-primary'><FaFileDownload /></button>
                {/* edit */}
                <div><Edit /></div>
                {/* history */}
                <Link to={'/history'} className='btn fs-3 text-primary'><FaHistory /></Link>
                {/* back to generator */}
                <Link to={'/resume-generator'} className='text-primary'>BACK</Link>
              </div >}
              <Box>
                <Paper elevation={12} id='result'>
                  <Typography varient='h4' align='center'>
                    <h1>Name : {userInput.personalDetails.name}</h1>      </Typography>
                  <Typography varient='subtitle1' align='center'>
                    <h3>Job Title : {userInput.personalDetails.jobTitle}</h3>
                  </Typography>
                  <Typography varient='body2' align='center'>
                    {userInput.personalDetails.location} | {userInput.personalDetails.email} | {userInput.personalDetails.phone}
                  </Typography>
                  <Typography varient='body2' align='center' mb={4}>
                    <Link href="{userInput.personalDetails.github}" target="_blank">Github </Link> |
                    <Link href="{userInput.personalDetails.linkedIn}" target="_blank"> Linkedin </Link> |
                    <Link href="{userInput.personalDetails.portfolio}" target="_blank"> Portfolio</Link>
                  </Typography>
                  <Divider>Summary</Divider>
                  <Typography mb={3}>
                    <p>{userInput.summary}</p>
                  </Typography>
                  <Divider>Education</Divider>
                  <Typography varient='h6' align='center'>
                    <h5>{userInput.education.course}</h5>
                    <p>
                      <span>{userInput.education.college}</span> | <span>{userInput.education.university}</span> | <span>{userInput.education.year}</span>
                    </p>
                  </Typography>

                  <Divider>Proffessional Experience</Divider>
                  <Typography varient='h6' align='center'>
                    <h5>{userInput.experience.job}</h5>
                    <p>
                      <span>{userInput.experience.company}</span> | <span>{userInput.experience.location}</span> | <span>{userInput.experience.duration}</span>
                    </p>
                  </Typography>



                  <Divider>Skills</Divider>
                  <Stack spacing={2} direction="row" sx={{ flexWrap: 'wrap', gap: "10px", padding: '10px' }}>
                    {userInput.skills.map(skill => (
                      <Button variant="contained">{skill}</Button>
                    ))}
                  </Stack>
                </Paper>
              </Box>
            </div>
          }
        </div>
      </div>
    </>
  )
}

export default Preview