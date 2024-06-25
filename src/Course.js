import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import courses from './courseData';

function CourseList() {
  const [filter, setFilter] = useState('');
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [enrollmentConfirmed, setEnrollmentConfirmed] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleFilterChange = (event) => {
    const value = event.target.value;
    setFilter(value);
    setFilteredCourses(
      courses.filter(course =>
        course.title.toLowerCase().includes(value.toLowerCase()) ||
        course.description.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleEnrollClick = (course) => {
    setSelectedCourse(course);
    setEnrollmentConfirmed(false); // Reset confirmation state
  };

  const handleConfirmEnroll = () => {
    // Perform enrollment logic here (e.g., API call, state update)
    setEnrollmentConfirmed(true);
  };

  const handleCloseDialog = () => {
    setEnrollmentConfirmed(false);
    setSelectedCourse(null); // Reset selected course
  };

  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <TextField
        label="Filter courses"
        variant="outlined"
        fullWidth
        margin="normal"
        value={filter}
        onChange={handleFilterChange}
      />
      <Grid container spacing={4}>
        {filteredCourses.map((course) => (
          <Grid item key={course.id} xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="140"
                image={course.image}
                alt={course.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {course.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {course.description}
                </Typography>
                <Typography variant="body1" color="text.primary" sx={{ mt: 1 }}>
                  Price: Rs.{course.price}
                </Typography>
                <Typography variant="body1" color="text.primary">
                  Duration: {course.duration}
                </Typography>
                <Typography variant="body1" color="text.primary">
                  Course Period: {course.period}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" onClick={() => handleEnrollClick(course)}>
                  Enroll
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Confirmation Dialog */}
      <Dialog
        open={!!selectedCourse && !enrollmentConfirmed} // Ensure dialog closes after enrollment confirmation
        onClose={handleCloseDialog}
        aria-labelledby="enroll-dialog-title"
        aria-describedby="enroll-dialog-description"
      >
        <DialogTitle id="enroll-dialog-title">Confirm Enrollment</DialogTitle>
        <DialogContent>
          <DialogContentText id="enroll-dialog-description">
            Are you sure you want to enroll in {selectedCourse?.title}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmEnroll} color="primary" autoFocus>
            Enroll
          </Button>
        </DialogActions>
      </Dialog>

      {/* Success Message Dialog */}
      <Dialog
        open={enrollmentConfirmed}
        onClose={handleCloseDialog}
        aria-labelledby="success-dialog-title"
        aria-describedby="success-dialog-description"
      >
        <DialogTitle id="success-dialog-title">Enrollment Successful</DialogTitle>
        <DialogContent>
          <DialogContentText id="success-dialog-description">
            You have successfully enrolled in {selectedCourse?.title}.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default CourseList;
