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
                        <button class="nav-link">Products</button>
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
</style>