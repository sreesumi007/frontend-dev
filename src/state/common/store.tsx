import {configureStore} from '@reduxjs/toolkit';
import {applicationState} from '../applicationState';
import appCommonSlice from "../../admin-components/store/adminAppCommonOperations";
import adminAppJSONFormation from "../../admin-components/store/adminAppJSONFormation";
import hintsWithOrderSlice from "../../admin-components/store/slices/hintsWithOrderSlice";
import loginAuthenticationSlice from "../../admin-components/store/slices/loginAuthenticationSlice";
import quesMultipleChoiceSlice from "../../admin-components/store/slices/quesMultipleChoiceSlice";
import textHintSlice from "../../admin-components/store/slices/textHintSlice";
import sessionValidationSlice from '../../admin-components/store/slices/sessionValidationSlice';

export const store = configureStore({
    reducer: {
        applicationStateManagement: applicationState.reducer,
        appCommonSlice,
        textHintSlice,
        quesMultipleChoiceSlice,
        hintsWithOrderSlice,
        adminAppJSONFormation,
        loginAuthenticationSlice,
        sessionValidationSlice
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;