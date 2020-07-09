/*
The phone matchup coding test.

A phone company keeps record of all calls that have been successfully
established (see log_data below). For these calls, the company registers
whether they fail mid-call or complete successfully. We are interested in
computing the "success ratio", which is defined by the number of successful
calls vs. absolute number of calls that involved a party.

The format is:

date: year-month-day 24hours:minutes
caller: phone number
callee: phone number
status: COMPLETED/FAILED

When 123 would call 456 and the call would end successfully, the following
entry would show up in the log_data:
2020-03-02 12:33,123,456,COMPLETED
This call is counted as completed for both parties!

If the same call fails mid-call, the line would look like this
2020-03-02 12:33,123,456,FAILED
This call is counted as failed for both parties!

The following template shows some log data and the expected results.
You must implement the function computeSuccessRatio
Feel free to use any available node modules.
Feel free to add more test cases as you see fit.

After you are done, please share you solution with us along with an estimate of
the time you spent on it.  
You can do this via a private fork on GitHub (share with @d1rtym0nk3y) or simply
zip up your code and send it to your contact.
We evaluate the submission based on: correctness, structure, appropriate
use of data structures, efficiency, appropriate use of modules.
*/

export const logData = `2020-03-02 12:01,441632960294,12025550140,COMPLETED
2020-03-02 13:01,441632960294,61355506341,FAILED
2020-03-02 13:04,441632960294,12025550140,FAILED
2020-03-02 13:05,441632960294,12025550140,COMPLETED
2020-03-02 13:01,61355506341,441632960294,FAILED
`;
export const expectedResult: Record<string, string> = {
  "441632960294": "40.00%",
  "12025550140": "66.67%",
  "61355506341": "0.00%"
};

export function computeSuccessRatio(logdata: string): Record<string, string> {
  /* Implement me! */
  return {};
}
