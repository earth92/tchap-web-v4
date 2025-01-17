/*
Copyright 2019 Vector Creations Ltd

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React from 'react';
import { _t } from 'matrix-react-sdk/src/languageHandler';
import DialogButtons from "matrix-react-sdk/src/components/views/elements/DialogButtons";

interface IProps {
    onDone: () => void;
}

export default class TchapVerificationComplete extends React.Component<IProps> {
    public render(): React.ReactNode {
        return <div>
            <h2>{ _t("Verified!") }</h2>
            <p>{ _t("The sharing of your Tchap Keys has succeeded. Your messages will be unlocked.") }</p>
            <DialogButtons onPrimaryButtonClick={this.props.onDone}
                primaryButton={_t("Finish")}
                hasCancel={false}
            />
        </div>;
    }
}
