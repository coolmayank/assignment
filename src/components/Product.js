import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Rating from "@material-ui/lab/Rating";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import useStyles from "../styles/Productstyles";

const theme = createMuiTheme({
  overrides: {
    typography: {
      subtitlea: {
        fontSize: "14px !important",

        "@media (min-width:350x)": {
          fontSize: "12px !important"
        }
      }
    }
  }
});
export default function MediaControlCard(props) {
  const classes = useStyles();
  return (
    <div>
      {props.products.map((products, index) => {
        var imageUrl = products.image_urls.x200;
        if (window.innerWidth >= 650) {
          imageUrl = products.image_urls.x240;
        } else {
          imageUrl = products.image_urls.x520;
        }
        let rating;
        if (products.rating == "0" || products.rating == null) {
        } else {
          rating = (
            <Typography
              component="legend"
              color="textSecondary"
              variant="subtitle2"
              display={"inline"}
              style={{ marginTop: "15px", minWidth: "40px" }}
            >
              {products.rating} &#9733;
            </Typography>
          );
        }

        let instock;
        if (products.is_in_stock)
          instock = (
            <div className={classes.controls}>
              <Button
                variant="contained"
                className={classes.button}
                size="medium"
              >
                ADD TO CART
              </Button>
            </div>
          );
        else
          instock = (
            <div className={classes.controls}>
              <Button
                variant="contained"
                className={classes.button}
                disabled
                size="medium"
              >
                OUT OF STOCK
              </Button>
            </div>
          );

        return (
          <Card className={classes.card}>
            <div className={classes.crdimg}>
              <CardMedia
                className={classes.cover}
                image={imageUrl}
                title={products.base_product_name}
              />
            </div>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <ThemeProvider theme={theme}>
                  <Typography variant="subtitlea">{products.name}</Typography>

                  <Typography variant="subtitle2" color="textSecondary">
                    ({products.weight}
                    {products.weight_unit})
                  </Typography>
                  <Typography component="h5" variant="h6">
                    &#8377; {products.final_price}
                    <Typography
                      display={"inline"}
                      variant="subtitle2"
                      color="textSecondary"
                      style={{
                        textDecorationLine: "line-through",
                        marginLeft: "10px"
                      }}
                    >
                      &#8377;{products.price}
                    </Typography>
                  </Typography>
                </ThemeProvider>
                {instock}
              </CardContent>
            </div>
            <div>{rating}</div>
          </Card>
        );
      })}
    </div>
  );
}
