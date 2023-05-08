import { configureStore } from "@reduxjs/toolkit";
import appCommonSlice from "../adminAppCommonOperations";
import adminAppJSONFormation from "../adminAppJSONFormation";
import hintsWithOrderSlice from "../slices/hintsWithOrderSlice";
import loginAuthenticationSlice from "../slices/loginAuthenticationSlice";
import quesMultipleChoiceSlice from "../slices/quesMultipleChoiceSlice";
import textHintSlice from "../slices/textHintSlice";
import sessionValidationSlice from "../slices/sessionValidationSlice";
import saveHintsCollectionSlice from "../slices/saveHintsCollectionSlice";

const store = configureStore({
    reducer:{
        appCommonSlice,
        textHintSlice,
        quesMultipleChoiceSlice,
        hintsWithOrderSlice,
        adminAppJSONFormation,
        loginAuthenticationSlice,
        sessionValidationSlice,
        saveHintsCollectionSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;