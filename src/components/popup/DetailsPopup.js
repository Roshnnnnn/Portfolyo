import useClickOutside from "../../useClickOutside";

const DetailsPopup = ({ show, close, project }) => {
  let domNode = useClickOutside(() => {
    close();
  });

  if (!project) return null;

  const { title, image } = project;

  return (
    <div className={`tonni_tm_modalbox ${show ? "opened" : ""}`}>
      <div className="box_inner" ref={domNode}>
        <div className="close">
          <a className="c-pointer" onClick={close}>
            <i className="icon-cancel" />
          </a>
        </div>
        <div className="description_wrap">
          <div className="popup_details">
            <div className="top_image">
              <img src={image.url} alt={title} />
              <div
                className="main"
                data-img-url={image.url}
                style={{ backgroundImage: `url("${image.url}")` }}
              />
            </div>
            <div className="portfolio_main_title">
              <span>
                <a href="#">Details</a>
              </span>
              <h3>{title}</h3>
              <div />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPopup;
