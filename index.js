const Notification = (props) => {
  const { text, url, className } = props;
  return (
    <div className="bag2">
      <div className={className}>
        <div className="bag3">
          <img src={url} className="image" alt="avatar" />
          <p className="para">{text}</p>
        </div>
      </div>
    </div>
  );
};

const element = (
  <div className="element-bag">
    <div className="headbg">
      <h1 className="head">Notifications</h1>
    </div>
    <div>
      <Notification
        text="Information Message"
        url="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        className="background-info"
      />
      <Notification
        text="Success Message"
        url="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        className="background-suc"
      />
      <Notification
        text="Worning Message"
        url="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        className="background-warn"
      />
      <Notification
        text="Error Message"
        url="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        className="background-err"
      />
    </div>
    ;
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
