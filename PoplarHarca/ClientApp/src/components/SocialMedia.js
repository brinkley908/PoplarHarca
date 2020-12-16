import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import WebIcon from '@material-ui/icons/Web';
import IconButton from '@material-ui/core/IconButton';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    IconTheme: {
        color: "#00b3bc",

        "&:focus": {
            outline: "none"
        },

        '& svg': {
            fontSize: 25

        }
    }
     
}));

export const SocialMedia = (props) => {



    function launchUrl(url) {

        if (url.toLowerCase().indexOf("http") == -1)
            url = "http://" + url;

        window.open(url);
    }

    const classes = useStyles();

    return (


        <div>


            {props.Twitter &&
                <IconButton aria-label="twitter" className={classes.IconTheme} onClick={() => launchUrl(props.Twitter)}>
                    <TwitterIcon />
                </IconButton>
            }

            {props.Facebook &&
                <IconButton aria-label="facebook" className={classes.IconTheme} onClick={() => launchUrl(props.Facebook)}>
                    <FacebookIcon />
                </IconButton>
            }

            {props.Instagram &&
                <IconButton aria-label="instagram" className={classes.IconTheme} onClick={() => launchUrl(props.Instagram)}>
                    <InstagramIcon />
                </IconButton>
            }

            {props.Website &&
                <IconButton aria-label="website" className={classes.IconTheme} onClick={() => launchUrl(props.Website)}>
                    <WebIcon />
                </IconButton>
            }


        </div>
    );

}