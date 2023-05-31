import React, { Fragment, useState } from "react";
import { Modal } from "react-bootstrap";
import { appCommonSliceRes } from "../../../store/adminAppCommonOperations";

import { useAppDispatch, useAppSelector } from "../../../store/config/hooks";
import { hintsWithOrder } from "../../../store/slices/hintsWithOrderSlice";
import { adminAppJSON } from "../../../store/adminAppJSONFormation";
import { saveHintsFromUser } from "../../../store/slices/saveHintsCollectionSlice";
import { saveQuestionAnswer } from "../../../store/slices/questionAndAnswerSlice";

const SaveConfirmation = (props: any) => {
  const appOperations = useAppSelector(appCommonSliceRes);
  const hints = useAppSelector(hintsWithOrder);
  const adminAppJson = useAppSelector(adminAppJSON);

  const adminAppJSONFormation = async (event: any) => {
    event.preventDefault();
    let hintsString = JSON.stringify(hints);
    let questionAnswerString = JSON.stringify(adminAppJson);

    console.log("Hints with Order -", hintsString);
    console.log("Admin App Json -", questionAnswerString);
    if (hints.textHints.length > 0||hints.scriptHints.length>0||hints.graphicalHints.length>0) {
      const saveHintsCollection = await dispatch(
        saveHintsFromUser(hintsString)
      );
      console.log(
        "saveHintsCollection Result save map id- ",
        saveHintsCollection.payload,
        appOperations.saveMapId
      );
    }
    if (adminAppJson.question !== "") {
      const saveQuestionAndAnswer = await dispatch(
        saveQuestionAnswer(questionAnswerString)
      );
      console.log(
        "saveQuestionAndAnswer Result save map id- ",
        saveQuestionAndAnswer.payload,
        appOperations.saveMapId
      );
    } else {
      console.log(
        "saved Graph alone Result with save map id",
        appOperations.saveMapId
      );
    }
    window.location.reload();
  };

  const dispatch = useAppDispatch();

  return (
    <Fragment>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body className="text-center">
          <h6>Are you Sure want to save the changes? Please confirm</h6>
          <br />
          <div className="justify-content-center">
            <button className="btn btn-primary" onClick={adminAppJSONFormation}>
              Confirm
            </button>
            &nbsp;&nbsp;
            <button
              className="btn btn-primary"
              onClick={() => {
                props.onHide();
              }}
            >
              Cancel
            </button>
          </div>
        </Modal.Body>
        {/* <Modal.Footer className="justify-content-center">
          <button
            className="btn btn-outline-primary"
            // onClick={saveOrderOfHints}
          >
            Save
          </button>
          <button className="btn btn-outline-primary" 
          onClick={()=>{props.onHide();}}
          >
            Close
          </button>
        </Modal.Footer> */}
      </Modal>
    </Fragment>
  );
};

export default SaveConfirmation;
