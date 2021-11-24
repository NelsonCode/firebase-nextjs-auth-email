import React from "react";
import styled from "styled-components";

function Notification({ show, message }) {
  return (
    <StyleNotification>
      <div>
        <div id="snackbar" className={show ? "animation-in" : "not-show"}>
          {message}
        </div>
      </div>
    </StyleNotification>
  );
}

export default Notification;

const StyleNotification = styled.div`
  #snackbar {
    min-width: 250px;
    margin-left: -125px;
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
    text-align: center;
    border-radius: 2px;
    padding: 16px;
    position: fixed;
    z-index: 1;
    left: 50%;
    bottom: 100px;
  }
  .animation-in {
    animation: fadein 0.5s, fadeout 0.5s 2.5s;
  }
  .not-show {
    display: none;
  }
  /* Animations to fade the snackbar in and out */
  @-webkit-keyframes fadein {
    from {
      bottom: 0;
      opacity: 0;
    }
    to {
      bottom: 100px;
      opacity: 1;
    }
  }
  @keyframes fadein {
    from {
      bottom: 0;
      opacity: 0;
    }
    to {
      bottom: 100px;
      opacity: 1;
    }
  }
  @-webkit-keyframes fadeout {
    from {
      bottom: 100px;
      opacity: 1;
    }
    to {
      bottom: 0;
      opacity: 0;
    }
  }
  @keyframes fadeout {
    from {
      bottom: 100px;
      opacity: 1;
    }
    to {
      bottom: 0;
      opacity: 0;
    }
  }
`;
