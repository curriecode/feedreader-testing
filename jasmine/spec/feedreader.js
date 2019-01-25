$(function() {
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
       
        it('URL is defined and URL not empty', function() {
            for(let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url).toContain('http')
            }
        });
    

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('Name is defined and name not empty', function() {
            for(let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).toBeGreaterThan(0)
            }
        });
    });
  

    /* TODO: Write a new test suite named "The menu" */

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
    describe('The menu', function() {
        let menu = document.querySelector('body')
        it('menu is hidden by default', function() {
            expect(menu.classList[0]).toBe('menu-hidden')
        });

           /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

        it('menu changes visibility when clicked', function() {
            document.getElementsByClassName('menu-icon-link')[0].click()
            expect(menu.classList.length).toBe(0)
            document.getElementsByClassName('menu-icon-link')[0].click()
            expect(menu.classList.length).toBe(1)
            
        });
    });

      

    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
    describe('Initial Entries', function() {
        let feed = document.getElementsByClassName('feed')[0]

        beforeEach(function(done) {
            loadFeed(0, done)
        });

        it('there is atleast 1 entry in the feed when loadFeed() finsihes', function() {
           expect(feed.children.length).toBeGreaterThan(0)
        });
        
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
    */
    describe('New Feed Selection', function() {    
        let oldContent;
//@description Checks whats the old content in the feed is
        beforeEach(function(done) {
            let loadNewFeed = () => {
                oldContent = document.getElementsByClassName('feed')[0].firstElementChild.textContent
                loadFeed(2, done)
            }
            loadFeed(1, loadNewFeed)
     
        });
//@description makes sure the new feed content is not the same as the old feed content
        it('new feed content is loaded by loadfeed()', function(done) {
            let newContent = document.getElementsByClassName('feed')[0].firstElementChild.textContent
            expect(oldContent).not.toBe(newContent)
            done()
        });
    });
}());
