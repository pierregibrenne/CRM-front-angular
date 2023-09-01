'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">front-certif documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-c41173c6339c80500d280470092c16aea82699635fa0aa86d27339368a4744b98719dde145bc45c8fe88430017ea73b78a98e6b6abee07c46c6bb1105d0c04ee"' : 'data-target="#xs-components-links-module-AppModule-c41173c6339c80500d280470092c16aea82699635fa0aa86d27339368a4744b98719dde145bc45c8fe88430017ea73b78a98e6b6abee07c46c6bb1105d0c04ee"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-c41173c6339c80500d280470092c16aea82699635fa0aa86d27339368a4744b98719dde145bc45c8fe88430017ea73b78a98e6b6abee07c46c6bb1105d0c04ee"' :
                                            'id="xs-components-links-module-AppModule-c41173c6339c80500d280470092c16aea82699635fa0aa86d27339368a4744b98719dde145bc45c8fe88430017ea73b78a98e6b6abee07c46c6bb1105d0c04ee"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CoreModule-b41be55726b47efe0e7d6bd447330078e6153191313c7f817c29e458c693eb6f546934d0f9d3c64e4da686d53c6de6c2430f8db9ec849b5842baf79d2ff977d2"' : 'data-target="#xs-components-links-module-CoreModule-b41be55726b47efe0e7d6bd447330078e6153191313c7f817c29e458c693eb6f546934d0f9d3c64e4da686d53c6de6c2430f8db9ec849b5842baf79d2ff977d2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-b41be55726b47efe0e7d6bd447330078e6153191313c7f817c29e458c693eb6f546934d0f9d3c64e4da686d53c6de6c2430f8db9ec849b5842baf79d2ff977d2"' :
                                            'id="xs-components-links-module-CoreModule-b41be55726b47efe0e7d6bd447330078e6153191313c7f817c29e458c693eb6f546934d0f9d3c64e4da686d53c6de6c2430f8db9ec849b5842baf79d2ff977d2"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PageNotFoundModule.html" data-type="entity-link" >PageNotFoundModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PageNotFoundModule-fccb7226b6bf0809a77e78e9eafbfa2af0b1cfe9ffd092dfdac3112eaa4288cef14ed2fbbcd5aa377007fd81f929987a61dee76de1481492219a56d0f3d4e6db"' : 'data-target="#xs-components-links-module-PageNotFoundModule-fccb7226b6bf0809a77e78e9eafbfa2af0b1cfe9ffd092dfdac3112eaa4288cef14ed2fbbcd5aa377007fd81f929987a61dee76de1481492219a56d0f3d4e6db"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PageNotFoundModule-fccb7226b6bf0809a77e78e9eafbfa2af0b1cfe9ffd092dfdac3112eaa4288cef14ed2fbbcd5aa377007fd81f929987a61dee76de1481492219a56d0f3d4e6db"' :
                                            'id="xs-components-links-module-PageNotFoundModule-fccb7226b6bf0809a77e78e9eafbfa2af0b1cfe9ffd092dfdac3112eaa4288cef14ed2fbbcd5aa377007fd81f929987a61dee76de1481492219a56d0f3d4e6db"' }>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageNotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PageNotFoundRoutingModule.html" data-type="entity-link" >PageNotFoundRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-c85d18b86e049037ccbb35d970a8ceea30511dea41997d63c294d3623dc6fc3c1beba48147123be1da106326490c72e9f190864d810f27c9918338e7f940cac0"' : 'data-target="#xs-components-links-module-SharedModule-c85d18b86e049037ccbb35d970a8ceea30511dea41997d63c294d3623dc6fc3c1beba48147123be1da106326490c72e9f190864d810f27c9918338e7f940cac0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-c85d18b86e049037ccbb35d970a8ceea30511dea41997d63c294d3623dc6fc3c1beba48147123be1da106326490c72e9f190864d810f27c9918338e7f940cac0"' :
                                            'id="xs-components-links-module-SharedModule-c85d18b86e049037ccbb35d970a8ceea30511dea41997d63c294d3623dc6fc3c1beba48147123be1da106326490c72e9f190864d810f27c9918338e7f940cac0"' }>
                                            <li class="link">
                                                <a href="components/BtnComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BtnComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-SharedModule-c85d18b86e049037ccbb35d970a8ceea30511dea41997d63c294d3623dc6fc3c1beba48147123be1da106326490c72e9f190864d810f27c9918338e7f940cac0"' : 'data-target="#xs-directives-links-module-SharedModule-c85d18b86e049037ccbb35d970a8ceea30511dea41997d63c294d3623dc6fc3c1beba48147123be1da106326490c72e9f190864d810f27c9918338e7f940cac0"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SharedModule-c85d18b86e049037ccbb35d970a8ceea30511dea41997d63c294d3623dc6fc3c1beba48147123be1da106326490c72e9f190864d810f27c9918338e7f940cac0"' :
                                        'id="xs-directives-links-module-SharedModule-c85d18b86e049037ccbb35d970a8ceea30511dea41997d63c294d3623dc6fc3c1beba48147123be1da106326490c72e9f190864d810f27c9918338e7f940cac0"' }>
                                        <li class="link">
                                            <a href="directives/StateDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StateDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TasksModule.html" data-type="entity-link" >TasksModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TasksModule-b1a007f038851f9bee1c83e8b017d095d2ce0e690919817679ce4c4300246cec6be5ea491f2ab3dcb43a3e17fa48a3dc77fe6498ca9b811883357a29df080d7b"' : 'data-target="#xs-components-links-module-TasksModule-b1a007f038851f9bee1c83e8b017d095d2ce0e690919817679ce4c4300246cec6be5ea491f2ab3dcb43a3e17fa48a3dc77fe6498ca9b811883357a29df080d7b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TasksModule-b1a007f038851f9bee1c83e8b017d095d2ce0e690919817679ce4c4300246cec6be5ea491f2ab3dcb43a3e17fa48a3dc77fe6498ca9b811883357a29df080d7b"' :
                                            'id="xs-components-links-module-TasksModule-b1a007f038851f9bee1c83e8b017d095d2ce0e690919817679ce4c4300246cec6be5ea491f2ab3dcb43a3e17fa48a3dc77fe6498ca9b811883357a29df080d7b"' }>
                                            <li class="link">
                                                <a href="components/ColumnTasksComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ColumnTasksComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormTaskComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormTaskComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageAddTaskComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageAddTaskComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageEditTaskComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageEditTaskComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageListTasksComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageListTasksComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TasksRoutingModule.html" data-type="entity-link" >TasksRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UiModule.html" data-type="entity-link" >UiModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UiModule-30cf17e6703a21304a02b3b4c9bfb229b63494db5ad0f900b11ae92b3438ca8adbf3d52c4ef7c72697afe4ff1695c8b1f37b5b1e088e34a69d2272dc1b1d5249"' : 'data-target="#xs-components-links-module-UiModule-30cf17e6703a21304a02b3b4c9bfb229b63494db5ad0f900b11ae92b3438ca8adbf3d52c4ef7c72697afe4ff1695c8b1f37b5b1e088e34a69d2272dc1b1d5249"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UiModule-30cf17e6703a21304a02b3b4c9bfb229b63494db5ad0f900b11ae92b3438ca8adbf3d52c4ef7c72697afe4ff1695c8b1f37b5b1e088e34a69d2272dc1b1d5249"' :
                                            'id="xs-components-links-module-UiModule-30cf17e6703a21304a02b3b4c9bfb229b63494db5ad0f900b11ae92b3438ca8adbf3d52c4ef7c72697afe4ff1695c8b1f37b5b1e088e34a69d2272dc1b1d5249"' }>
                                            <li class="link">
                                                <a href="components/UiComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UiComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Task.html" data-type="entity-link" >Task</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/TasksService.html" data-type="entity-link" >TasksService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/TaskI.html" data-type="entity-link" >TaskI</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});