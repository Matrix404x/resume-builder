import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { Button, Divider, Stack, Typography } from '@mui/material';
import { FaFileDownload } from 'react-icons/fa';
import Edit from '../Components/Edit.jsx';
import { FaHistory } from 'react-icons/fa';
import jsPDF from 'jsPDF'
import html2canvas from 'html2canvas'
import { addDownloadHistoryAPI} from '../services/allAPI.js'


function Preview({ userInput, finish }) {

  const[downloadStatus,setDownloadStatus] = useState(false)

  console.log(userInput);

  const downloadCV = async () => {
    // getElement for screenshot

    const input = document.getElementById('result')
    const canvas = await html2canvas(input, { scale: 2 })
    const imgURL = canvas.toDataURL('image/png')

    const pdf = new jsPDF()
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = pdf.internal.pageSize.getHeight()
    pdf.addImage(imgURL, 'PNG', 0, 0, pdfWidth, pdfHeight)
    pdf.save('resume.pdf')

    // getDate
    const localTimeDate = new Date()
    const timeStamp = `${localTimeDate.toLocaleDateString()},${localTimeDate.toLocaleDateString}`

    try {
      const result = await addDownloadHistoryAPI({ ...userInput, imgURL, timeStamp })
      console.log(result)
      setDownloadStatus(true)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div>

      <div style={{ marginTop: '100px' }}>

        {userInput.personalDetails.name != "" &&
          <div className="flex-column">
            {finish && <div className="d-flex justify-content-end align-items-center">
              {/* download */}
              <button onClick={downloadCV} className='btn fs-3 text-primary'><FaFileDownload /></button>
              {/* edit */}
              <div><Edit /></div>
              {/* history */}
              { downloadStatus&&<>
              < Link to={'/history'} className='btn fs-3 text-primary'><FaHistory /></Link>
              </>
              }
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
  )
}

export default Preview;