import React from 'react';
import { Streamlit, StreamlitComponentBase, withStreamlitConnection } from 'streamlit-component-lib';
import './MyComponent.css';  // 주어진 CSS를 적용

interface MyComponentProps {
    totalSteps: number;
    currentStep: number;
    stepLabels: string[];
}

class MyComponent extends StreamlitComponentBase<MyComponentProps> {
    render() {
      const { totalSteps, currentStep, stepLabels } = this.props.args;

      if (stepLabels.length !== totalSteps) {
          return <div>Error: 레이블 개수가 status 수와 일치하지 않음</div>;
      }

      const steps = Array.from({ length: totalSteps }, (_, index) => {
        const stepClass = index < currentStep ? 'active step0' : 'step0';
        const label = stepLabels[index];
        return (
            <li key={index} className={stepClass}>
                <div>{label}</div> 
            </li>
        );
      });

        return (
            <div className="row d-flex justify-content-center">
                <div className="col-12">
                    <ul id="progressbar" className="text-center">
                        {steps}
                    </ul>
                </div>
            </div>
        );
    }
}

export default withStreamlitConnection(MyComponent);
