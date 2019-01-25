$(function() {
    describe('RSS Feeds', function() {
        /* @description makes sure that the
         * allFeeds variable has been defined and that it is not empty
        */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* @description ensures each feed has a URL defined
         * and that the URL is not empty.
        */
        it('URL is defined and URL not empty', function() {
            for(let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url).toContain('http');
            };
        });
    
        /* @description loops through each feed in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
        */
        it('Name is defined and name not empty', function() {
            for(let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).toBeGreaterThan(0);
            };
        });
    });

    describe('The menu', function() {
        // @description ensures the menu element is hidden by default.
        let menu = document.querySelector('body');
        it('menu is hidden by default', function() {
            expect(menu.classList[0]).toBe('menu-hidden');
        });

        // @description ensures the menu changes visibility when the menu icon is clicked. 
        it('menu changes visibility when clicked', function() {
            document.getElementsByClassName('menu-icon-link')[0].click();
            expect(menu.classList.length).toBe(0);
            document.getElementsByClassName('menu-icon-link')[0].click();
            expect(menu.classList.length).toBe(1);
        });
    });

    /* @description test suite for initial loading */
    describe('Initial Entries', function() {
        /* @description that ensures when the loadFeed
            * function is called and completes its work, there is at least
            * a single .entry element within the .feed container.
        */
        let feed = document.getElementsByClassName('feed')[0];

        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('there is atleast 1 entry in the feed when loadFeed() finsihes', function() {
           expect(feed.children.length).toBeGreaterThan(0);
        });
    });

    /* @description test suites for "New Feed Selection" that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
    */
    describe('New Feed Selection', function() {    
        let oldContent;
        //@description Checks whats the old content in the feed is
        beforeEach(function(done) {
            let loadNewFeed = () => {
                oldContent = document.getElementsByClassName('feed')[0].firstElementChild.textContent;
                loadFeed(2, done);
            };
            loadFeed(1, loadNewFeed);
        });
        //@description makes sure the new feed content is not the same as the old feed content
        it('new feed content is loaded by loadfeed()', function(done) {
            let newContent = document.getElementsByClassName('feed')[0].firstElementChild.textContent;
            expect(oldContent).not.toBe(newContent);
            done();
        });
    });
}());
