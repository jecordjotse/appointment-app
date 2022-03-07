const PageViewController = (url) => {
  let controller = url ? url[0] : "";
  console.log(controller);
  switch (controller) {
    case "approve-appointment":
      return "approve";
      break;
    case "edit":
      return "edit";
      break;
    case "have-appointment":
      return "have";
      break;
    case "list-appointment":
      return "list";
      break;
    case "preview":
      return <></>;
      break;
    case "upcoming-appointment":
      return "upcoming";
      break;
    case "home":
    default:
      return "home";
      break;
  }
};

export default PageViewController;
