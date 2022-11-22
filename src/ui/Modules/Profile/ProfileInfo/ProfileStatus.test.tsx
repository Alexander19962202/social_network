import React from "react";
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { create } from "react-test-renderer";
// @ts-expect-error TS(6142): Module './ProfileStatus' was resolved to '/home/al... Remove this comment to see the full error message
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        let status = 'It my status';
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        const component = create(<ProfileStatus status={status}/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe(status);
    });

    test("after creation <span> should be displayed", () => {
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        const component = create(<ProfileStatus status="My status" />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span).not.toBeNull();
    });

    test("after creation <input> shouldn't be displayed", () => {
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        const component = create(<ProfileStatus status="My status" />);
        const root = component.root;
        expect(() => {
            let input = root.findByType("input");
        }).toThrow();
    });

    test("after creation <span> should contains correct status", () => {
        const status = "Test status";
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        const component = create(<ProfileStatus status={status} />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe(status);
    });


    test("input should be displayed in editMode instead of span", () => {
        const status = "My status";
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        const component = create(<ProfileStatus status={status} />);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input");
        expect(input.props.value).toBe(status);
    });

    test("callback should be called", () => {
        const mockCallback = jest.fn();
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        const component = create(<ProfileStatus status="it-kamasutra.com" updateProfileStatus={mockCallback} />);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});