export const useStyles = () => ({
  $primary: "#FF4081",
  body: {
    display: "grid",
    placeContent: "center",
    height: "100vh",
    background: "#ECEFF1"
  },
  toggle: {
    display: "flex"
    /* @media screen and (maxWidth: "700px") { 
		flexDirection: "column",
	}
  input: {
    display: "none",
    @for $i from 1 through 5 {
      &#toggle-#{$i}:checked ~ .label-#{$i} {
				width: 120px,
        @media screen and (max-width: 700px) { 
		      height: 120px,
          width: auto,
	      }
			}
		} */
  },
  label: {
    width: "80px",
    height: "25px",
    margin: "0 20px",
    borderRadius: "999px",
    background: "$primary",
    cursor: "pointer",
    /* boxShadow: 
      0 5px 5px -5px rgba($primary, 0.15),
      0 10px 10px -5px rgba($primary, 0.15),
      0 15px 15px -5px rgba($primary, 0.15),
      0 20px 20px -5px rgba($primary, 0.15), */
    transition: "0.25s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    padding: "10px"
    /*  @media screen and (max-width: 700px) { 
      width: "25px",
      height: "60px",
      margin: "20px 0",
    } */
  }
});
