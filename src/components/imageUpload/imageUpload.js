// imports the React Javascript Library
import React from 'react';
//Card
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';

import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
//Tabs
import { withStyles } from '@material-ui/core/styles';

// reference: https://codesandbox.io/s/material-ui-image-upload-component-forked-fr2gp
// reference: https://github.com/bezkoder/material-ui-file-upload/blob/master/src/components/upload-files.component.js

const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  icon: {
    margin: theme.spacing.unit * 2,
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    '&:hover': {
      color: red[800],
    },
  },
  cardHeader: {
    textalign: 'center',
    align: 'center',
    backgroundColor: 'white',
  },
  input: {
    display: 'none',
  },
  title: {
    color: blue[800],
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
    align: 'center',
  },
  button: {
    color: blue[900],
    margin: 10,
  },
  secondaryButton: {
    color: 'gray',
    margin: 10,
  },
  typography: {
    margin: theme.spacing.unit * 2,
    backgroundColor: 'default',
  },

  searchRoot: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  searchInput: {
    marginLeft: 8,
    flex: 1,
  },
  searchIconButton: {
    padding: 10,
  },
  searchDivider: {
    width: 1,
    height: 28,
    margin: 4,
  },
});

class ImageUploadCard extends React.Component {
  state = {
    mainState: 'initial',
    imageUploaded: 0,
    selectedFile: null,
  };

  handleUploadClick = (event) => {
    var file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = function (e) {
      this.setState({
        selectedFile: [reader.result],
      });
    }.bind(this);

    this.setState(
      {
        mainState: 'uploaded',
        selectedFile: event.target.files[0],
        imageUploaded: 1,
      },
      () => {
        this.props.onChange(this.state.selectedFile);
      }
    );
  };

  renderInitialState() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CardContent>
          <Grid container justify="center" alignItems="center">
            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
              onChange={this.handleUploadClick}
            />
            <label htmlFor="contained-button-file">
              <Fab component="span" className={classes.button}>
                <AddPhotoAlternateIcon />
              </Fab>
            </label>
          </Grid>
        </CardContent>
      </React.Fragment>
    );
  }

  renderUploadedState() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CardActionArea onClick={this.imageResetHandler}>
          <img
            width="100%"
            className={classes.media}
            src={this.state.selectedFile}
            alt="Uploaded"
          />
        </CardActionArea>
      </React.Fragment>
    );
  }

  imageResetHandler = () => {
    this.setState({
      mainState: 'initial',
      selectedFile: null,
      imageUploaded: 0,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <div className={classes.root}>
          <Card className={this.props.cardName}>
            {(this.state.mainState === 'initial' &&
              this.renderInitialState()) ||
              (this.state.mainState === 'uploaded' &&
                this.renderUploadedState())}
          </Card>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ImageUploadCard);
