import capsules from "../assets/images/capsules.png";
import crew from "../assets/images/crew.png";
import rockets from "../assets/images/rockets.png";
import starlink from "../assets/images/starlink.png";

export const cards = {
  capsules: {
    type: "capsules",
    endpoint: "capsules",
    cardTitle: "Capsules",
    firstColumn: "type",
    firstColumnTitle: "Type",
    secondColumn: "status",
    secondColumnTitle: "Status",
    image: capsules
  },
  crew: {
    type: "crew",
    endpoint: "crew",
    cardTitle: "Crew",
    firstColumn: "name",
    firstColumnTitle: "Name",
    secondColumn: "agency",
    secondColumnTitle: "Agency",
    image: crew
  },
  rockets: {
    type: "rockets",
    endpoint: "rockets",
    cardTitle: "Rockets",
    firstColumn: "name",
    firstColumnTitle: "Name",
    secondColumn: "first_flight",
    secondColumnTitle: "First flight",
    image: rockets
  },
  starlink: {
    type: "starlink",
    endpoint: "starlink",
    cardTitle: "Starlink",
    firstColumn: "version",
    firstColumnTitle: "Version",
    secondColumn: "launch",
    secondColumnTitle: "Launch",
    image: starlink
  }
};
