<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Stack Underflow</a>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <div class="dropdown">
                            <button class="nav-link" type="button" data-bs-toggle="dropdown">
                                Products
                            </button>
                            <ul class="dropdown-menu">
                                <li>
                                    <a class="dropdown-item" href="#">
                                        <p class="dropdown_title">Stack Internal</p>
                                        <p class="dropdown_caption">Implement a knowledge platform layer to power your enterprise and AI tools.</p>
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">
                                        <p class="dropdown_title">Stack Data Licensing</p>
                                        <p class="dropdown_caption">Get access to top-class technical expertise with trusted & attributed content.</p>
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">
                                        <p class="dropdown_title">Stack Ads</p>
                                        <p class="dropdown_caption">Connect your brand to the world's most trusted technologist communities.</p>
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">
                                        <p class="dropdown_title">Releases</p>
                                        <p class="dropdown_caption">Keep up to-date on features we add to Stack Underflow and Stack Internal.</p>
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">
                                        <p class="dropdown_title">About the company</p>
                                        <p class="dropdown_title">Visit the blog</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">For Teams</a>
                    </li>
                    <li class="nav-item">
                        <input class="form-control me-2" type="search" placeholder="Search..." aria-label="Search" />
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style>
.navbar {
    border-bottom: 1px solid hsl(210, 8%, 85%);
    height: 56px;
}

.nav-item {
    font-size: 13px;
    font-weight: 400;
    height: 29px;
    display: flex;
    align-items: center;
}

.nav-item:hover {
    background-color: #e3e6e8;
    border-radius: 360px;
}

.dropdown_title {
    font-size: 13px;
    color: black;
}

.dropdown_caption {
    font-size: 12px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.65);
}
</style>