1. CREATE TABLE campaign (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    subject_line VARCHAR(255) NOT NULL
);

We could save the filters by having a email_campaign_filters table that has foreign keys to the email campaign table, the table for services, the table for staff, and the client table.

2. We could have a campaign_filter table that references the staff and services table. Furthermore, the email_campaign_filter table could then reference the campaign_filter table as well as the client table.

3.
SELECT client.first_name, client.last_name
FROM client
JOIN appointment ON client.id = appointment.client_id
JOIN client_membership ON client.id = client_membership.client_id
JOIN staff ON appointment.staff_id = staff.id
WHERE staff.first_name = 'Jennifer'
AND client_membership.status != 'Active';

