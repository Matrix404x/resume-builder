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
          {userInput.personalDetails.name !== "" &&
            <div className="flex-column">
              {finish && (
                <div className="d-flex justify-content-end align-items-center">
                  {/* download */}
                  <button className='btn fs-3 text-primary'><FaFileDownload /></button>
                  {/* edit */}
                  <div><Edit /></div>
                  {/* history */}
                  <Link to={'/history'} className='btn fs-3 text-primary'><FaHistory /></Link>
                  {/* back to generator */}
                  <Link to={'/resume-generator'} className='text-primary'>BACK</Link>
                </div>
              )}
              
              <Box>
                <Paper elevation={12} id='result'>
                  {/* Fixed: Use component prop instead of wrapping in h1 */}
                  <Typography variant='h4' component='h1' align='center'>
                    Name: {userInput.personalDetails.name}
                  </Typography>
                  
                  {/* Fixed: Use component prop instead of wrapping in h3 */}
                  <Typography variant='subtitle1' component='h3' align='center'>
                    Job Title: {userInput.personalDetails.jobTitle}
                  </Typography>
                  
                  {/* Fixed: Changed variant typo from 'body2' to valid variant */}
                  <Typography variant='body2' align='center'>
                    {userInput.personalDetails.location} | {userInput.personalDetails.email} | {userInput.personalDetails.phone}
                  </Typography>
                  
                  {/* Fixed: Changed Link to 'a' tag and fixed href */}
                  <Typography variant='body2' align='center' mb={4}>
                    <a href={userInput.personalDetails.github} target="_blank" rel="noopener noreferrer">Github</a> |
                    <a href={userInput.personalDetails.linkedIn} target="_blank" rel="noopener noreferrer"> Linkedin</a> |
                    <a href={userInput.personalDetails.portfolio} target="_blank" rel="noopener noreferrer"> Portfolio</a>
                  </Typography>
                  
                  <Divider>Summary</Divider>
                  {/* Fixed: Removed nested p tag */}
                  <Typography mb={3}>
                    {userInput.summary}
                  </Typography>
                  
                  <Divider>Education</Divider>
                  {/* Fixed: Use component prop and removed nested tags */}
                  <Typography variant='h6' component='h5' align='center'>
                    {userInput.education.course}
                  </Typography>
                  <Typography variant='body2' align='center'>
                    {userInput.education.college} | {userInput.education.university} | {userInput.education.year}
                  </Typography>

                  <Divider>Professional Experience</Divider>
                  {/* Fixed: Use component prop and removed nested tags */}
                  <Typography variant='h6' component='h5' align='center'>
                    {userInput.experience.job}
                  </Typography>
                  <Typography variant='body2' align='center'>
                    {userInput.experience.company} | {userInput.experience.location} | {userInput.experience.duration}
                  </Typography>

                  <Divider>Skills</Divider>
                  {/* Fixed: Added key prop to mapped items */}
                  <Stack spacing={2} direction="row" sx={{ flexWrap: 'wrap', gap: "10px", padding: '10px' }}>
                    {userInput.skills.map((skill, index) => (
                      <Button key={index} variant="contained">{skill}</Button>
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

export default Preview;