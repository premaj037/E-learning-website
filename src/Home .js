import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import courses from './courseData';
import Footer from './Footer';

function HomePage() {
  const [expandedCourseId, setExpandedCourseId] = React.useState(null);

  const handleExpandClick = (courseId) => {
    setExpandedCourseId(courseId === expandedCourseId ? null : courseId);
  };

  return (
    <div style={{ marginTop: '64px' }}>
      <div style={{ padding: '50px 0', textAlign: 'center', backgroundColor: '#f8f9fa' }}>
        <Container>
          <Typography variant="h2" component="div" gutterBottom>
            Welcome to E-Learning Platform
          </Typography>
          <Typography variant="h5" component="div" gutterBottom>
            Learn anytime, anywhere
          </Typography>
          <Button variant="contained" color="primary" size="large" href="/courses">
            Browse Courses
          </Button>
        </Container>
      </div>

      <Container sx={{ py: 8 }} maxWidth="md">
        <Typography variant="h4" component="div" gutterBottom>
          Popular Courses
        </Typography>
        <Grid container spacing={4}>
          {courses.map((course) => (
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
                  {expandedCourseId === course.id ? (
                    <>
                      <Typography>
                        {course.description}
                      </Typography>
                      <Typography variant="body1" color="text.primary" sx={{ mt: 2 }}>
                        Price: Rs. {course.price}
                      </Typography>
                      <Typography variant="body1" color="text.primary">
                        Duration: {course.duration}
                      </Typography>
                      <Typography variant="body1" color="text.primary">
                        Course Period: {course.period}
                      </Typography>
                    </>
                  ) : null}
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => handleExpandClick(course.id)}
                  >
                    {expandedCourseId === course.id ? 'Close' : 'View'}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer/>
    </div>
  );
}

export default HomePage;
