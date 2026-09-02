CREATE TABLE `analytics_events` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`event` text NOT NULL,
	`label` text DEFAULT '' NOT NULL,
	`path` text DEFAULT '/' NOT NULL,
	`referrer` text DEFAULT 'direct' NOT NULL,
	`device` text DEFAULT 'desktop' NOT NULL,
	`session_id` text NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE INDEX `analytics_event_idx` ON `analytics_events` (`event`);--> statement-breakpoint
CREATE INDEX `analytics_created_at_idx` ON `analytics_events` (`created_at`);--> statement-breakpoint
CREATE INDEX `analytics_session_idx` ON `analytics_events` (`session_id`);
