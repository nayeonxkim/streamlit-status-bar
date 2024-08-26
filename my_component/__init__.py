import streamlit.components.v1 as components
import streamlit as st

_my_component = components.declare_component(
    "my_component",
    url = "http://localhost:3001"
)


total_steps = st.number_input("Total Steps", min_value=1, max_value=10, value=4)
current_step = st.number_input("Current Step", min_value=0, max_value=total_steps, value=2)
step_labels = st.text_input("Step Labels (comma separated)", value="1,2,3,4,5,6,7,8,9,10")
step_labels_list = [label.strip() for label in step_labels.split(",")]


_my_component(
    totalSteps=total_steps,
    currentStep=current_step,
    stepLabels=step_labels_list
)