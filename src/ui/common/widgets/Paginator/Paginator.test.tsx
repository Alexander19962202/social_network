import React from "react";
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { create } from "react-test-renderer";
// @ts-expect-error TS(6142): Module './Paginator' was resolved to '/home/alexev... Remove this comment to see the full error message
import Paginator from "./Paginator";

describe("Preloader component tests", () => {
    test("pages count is 11 but should be showed only 10", () => {
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        const component = create(<Paginator totalItemsCount={11} pageSize={1} pagesRange={10} />);
        const root = component.root;
        let spans = root.findAllByType("span");
        expect(spans.length).toBe(10);
    });

    test("if pages count is more then 10 button NEXT should be present", () => {
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        const component = create(<Paginator totalItemsCount={11} pageSize={1} pagesRange={10} />);
        const root = component.root;
        let button = root.findAllByType("button");
        expect(button.length).toBe(1);
    });

    test("if pages portion is more then 1 button NEXT and button PREV should be present", () => {
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        const component = create(<Paginator totalItemsCount={12} pageSize={1} currentItemsPage={5} pagesRange={4} />);
        const root = component.root;
        let button = root.findAllByType("button");
        expect(button.length).toBe(1);
    });
});