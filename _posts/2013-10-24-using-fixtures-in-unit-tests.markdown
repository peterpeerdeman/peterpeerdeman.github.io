---
layout: post
title:  "Using fixtures in unit tests"
date:   2013-10-24 
categories: symfony2
tags: [symfony2, phpunit, fixtures]
---

To ensure a valid data set for unit tests and to avoid setting up test data for each separate unit tests I've integrated setting up the fixtures in a separate class

{% highlight php %}
//FixturesWebTestCase.php
namespace BNP\ApiBundle\DataFixtures\ORM;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Component\Console\Application;
use Symfony\Component\Console\Input\StringInput;

class FixturesWebTestCase extends WebTestCase
{
    protected static $application;

    protected function setUp()
    {
        self::runCommand('doctrine:schema:drop --force');
        self::runCommand('doctrine:schema:create --force');
        self::runCommand('doctrine:fixtures:load --no-interaction');
    }

    protected static function runCommand($command)
    {
        $command = sprintf('%s --quiet', $command);

        return self::getApplication()->run(new StringInput($command));
    }

    protected static function getApplication()
    {
        if (null === self::$application) {
            $client = static::createClient();

            self::$application = new Application($client->getKernel());
            self::$application->setAutoExit(false);
        }

        return self::$application;
    }
}
{% endhighlight %}

All unit tests which extend this class now have automatic clean fixtures.
{% include JB/setup %}
